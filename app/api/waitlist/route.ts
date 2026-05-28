import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, role, ai_level, main_goal } = body

    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json(
        { error: 'Име и имейл са задължителни' },
        { status: 400 }
      )
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Невалиден имейл адрес' },
        { status: 400 }
      )
    }

    const { data, error } = await supabase
      .from('waitlist_members')
      .insert([
        {
          name: name.trim(),
          email: email.trim().toLowerCase(),
          role,
          ai_level,
          main_goal,
        },
      ])
      .select()

    if (error) {
      if (error.code === '23505') {
        return NextResponse.json(
          { error: 'Този имейл вече е записан' },
          { status: 409 }
        )
      }
      console.error(error)
      return NextResponse.json(
        { error: 'Грешка при записване в базата данни' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, data }, { status: 201 })
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { error: 'Вътрешна грешка' },
      { status: 500 }
    )
  }
}
