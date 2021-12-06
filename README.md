<div align="center">
<img src="./ng-sk.png" height="80px" title="Ng Starter Kit" />
</div>
<br />

<div align="center"><strong>Angular + Supabase starter for Typescript lovers</strong></div>


_Angular Starter Kit_ is an opinionated boilerplate based off of Angular 13, with all the bells and whistles you would want ready, up and running when starting a Angular project to work with.
<br/>
<div align="center">
  <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&style=flat-square&color=5e17eb&labelColor=000000" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/github/license/one-aalam/ng-starter-kit?style=flat-square&color=5e17eb&labelColor=000000">

  <a href="https://twitter.com/intent/follow?screen_name=aftabbuddy">
    <img src="https://img.shields.io/twitter/follow/aftabbuddy?style=flat-square&color=5e17eb&labelColor=000000" alt="Follow @aftabbuddy" />
  </a>
</div>
<br/>
<!--
<div align="center">
  <sub>Created by <a href="https://twitter.com/aftabbuddy">Aftab Alam</a> with the help of many <a href="https://github.com/one-aalam/ng-starter-kit/graphs/contributors">wonderful contributors</a>.</sub>
</div>
<br />
-->

Out of the box you get all the `essentials`
- __Typescript__ as the language choice
- __Tailwind CSS__ for quick styling without getting out of your HTML
- __Daisy UI__ for pre-made TailwindCSS component classes
- __Tailwind UI__ for robust headless logic you can use for components like Dialog/Modal, Dropdown, List, etc.
- __FontSource__ for effortless custom font integration
- __Icons through Fontawesome__ for ease of icon use
- __ESLint__ for static code analysis and
- __Prettier__ for code formatting
- __Jest__ for unit testing
- __Cypress__ for e2e test cases
- __.env__ Support for client-side environment variables

with [Supabase](https://supabase.io/) support
- __Authentication System__ with Supabase GoTrue
- __User Profiles__ available on `/profile` as an example for Supabase PostgREST (CRUD API)
- __User Avatar__ which is Supbase Storage(AWS S3 backed effortless uploads) supported

and a bunch of integrated and pre-made/hand-rolled(easily replace-able) components (as a library project - `projects/commons`), that you almost always end up installing/using for any non-trivial project
- __Button__ Button with DaisyUI style support for all the basic use cases
- __Alert/Toast__ to notify your users of the outcome of an event - `success, `error` or `default` is supported
- __Modal__(@ngneat/dialog) as you always come back to `em
- __Loaders__ for reporting the progress of an API call + a page load
- __Avatar__ for user avatar's

and more...

## Quick Start

The best way to start with this template is to click "Use this template" above, create your own copy and work with it

### Development

To start the project locally, run:
```bash
yarn start
```
which kickstarts the Angular development and build server. Open `http://localhost:4200` with your browser to see the result.
Check `package.json` for the full list of commands available at your disposal.

For building the library(`/projects/commons`), you have `build:lib` for compiling the code. Once compiled, the updated code can pulled by doing a `import { CommonsModule } from 'commons'` which will include all the common components like spinner, avatar, etc. in your module.

## How to Setup Supabase for Angular Starter Kit?
If new to Supabase
- Create account at [Supabase](https://app.supabase.io/)
- Create a Organisation, and a project

Once done, or if you already have a Supabase project
- Copy the generated project's API authentication details from `https://app.supabase.io/project/<your-awesome-ng-project>/api/default?page=auth`
- Place the details in `.env` as `SUPABASE_URL` and `SUPABASE_KEY`
- Install NPM dependencies, by running `yarn`

Nuxt Start Kit supports user profiles and user avatars. To get the profile table and storage ready, execute the following queries at `https://app.supabase.io/project/<your-awesome-ng-project>/editor/sql`

```sql
-- Create a table for Public Profiles
create table profiles (
  id uuid references auth.users not null,
  username text unique,
  avatar_url text,
  website text,
  updated_at timestamp with time zone,

  primary key (id),
  unique(username),
  constraint username_length check (char_length(username) >= 3)
);

alter table profiles enable row level security;

create policy "Public profiles are viewable by everyone."
  on profiles for select
  using ( true );

create policy "Users can insert their own profile."
  on profiles for insert
  with check ( auth.uid() = id );

create policy "Users can update own profile."
  on profiles for update
  using ( auth.uid() = id );

-- Set up Storage!
insert into storage.buckets (id, name)
values ('avatars', 'avatars');

create policy "Avatar images are publicly accessible."
  on storage.objects for select
  using ( bucket_id = 'avatars' );

create policy "Anyone can upload an avatar."
  on storage.objects for insert
  with check ( bucket_id = 'avatars' );
```
## License
MIT

<!-- # NgStarterKit

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page. -->
