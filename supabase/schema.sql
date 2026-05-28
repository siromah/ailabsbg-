create table if not exists waitlist_members (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text unique not null,
  role text,
  ai_level text,
  main_goal text,
  created_at timestamptz default now()
);

alter table waitlist_members enable row level security;

create policy "Allow all insert" on waitlist_members
  for insert to anon, authenticated
  with check (true);
