CREATE DATABASE IF NOT EXISTS grants;
use grants;

create table 
    votes (
        id text primary key
        transaction text
        block_number bigint
        block_timestamp timestamp with time zone default timezone ('utc'::text, now()) not null
        project_id text
        application_index int
        round_address text
        voter text
        grant_address text
        token text
        amount bigint
        amount_usd money
    )

create table
    contributions (
        id text primary key,
        project_id text,
        wallet_id text,
        amount_contributed_usd money,
        created_at timestamp with time zone default timezone ('utc'::text, now()) not null,
        updated_at timestamp with time zone default timezone ('utc'::text, now()) not null
    );