# Dev challenge — Wikipedia

## Cíl projektu
- Vytvořit funkční aplikaci pro zobrazování článků.
## Technologie
- NodeJS
- ReactJS
- GraphQL
- Apollo
- NextJS
- Strapi
- Klidně další, dle uvážení 🙂
## Boilerplate projektu
- Projekt je k dispozici na http://link.com
- Struktura obsahuje vygenerovaný backend pomocí kterého lze získat seznam článků.
- Je zde základní struktura React aplikace s potřebnými knihovnami a ukázkovým kódem.
## Spuštění backendu
- Je potřeba mít nainstalovaný NodeJS 10
- Nainstalovat Strapi CLI — `npm install strapi@alpha -g`
- `cd backend`
- `npm install`
- `strapi start` 
- Na adrese http://localhost:1337/admin se nachází admin interface, kde je potřeba založit účet.
- Povolit přístup k následujícím resourcům (záložka *Roles & Permissions*):
  - Posts — find, findOne
  - Weather — getinprague
  - Users — find
![Public role](https://paper-attachments.dropbox.com/s_DCFD24E9370D098B4806DF02C204D0CE5F238AC74FBC80CA6425572CB53DB22D_1554805727308_strapi3.png)

![Post a Weather resource](https://paper-attachments.dropbox.com/s_DCFD24E9370D098B4806DF02C204D0CE5F238AC74FBC80CA6425572CB53DB22D_1554832421974_s2.png)
![User resource](https://paper-attachments.dropbox.com/s_DCFD24E9370D098B4806DF02C204D0CE5F238AC74FBC80CA6425572CB53DB22D_1554800400672_strapi2.png)

- Adresa graphql backendu je http://localhost:1337/graphql
  - Zde si lze i vyzkoušet v prohlížeči graphql query v interaktivním editoru.
- Články lze vytvářet v záložce *Content Types* — *Posts*
- Články lze získat přes GraphQL pod query typem p*osts*
## Spuštění frontendu
- `cd frontend`
- `npm install`
- `npm run dev`
- Na adrese http://localhost:3000/ se nachází frontend aplikace
- Adresářová struktura projektu (adresáře do kterých budete přídávat a upravovat soubory)
  - *pages* — stránky aplikace, název souboru = název routy v URL (viz dokumentace NextJS)
  - components — React komponenty
- Ukázkový dotaz na server přes GraphQL je v souboru `components/user-list.js`
- Ukázkový odkaz s předáním a získáním parametru — soubory `pages/index.js` a `pages/about.js` (získání parametru v `getInitialProps` viz dokumentace NextJS)
## Úkoly

Seřazeno dle priority, čím více toho stihnete tím lépe.

- Fetch článků ze serveru do React aplikace (Pomocí Apollo a GraphQL).
- Zobrazení titulků článků na hlavní stránce.
- Po rozkliknutí titulku zobrazit obsah článku.
  - může se hodit https://strapi.io/documentation/3.x.x/guides/graphql.html#query-api
- Na backendu upravit resolver query typu *weather*, který vrátí aktuální data o počasí v Praze.
  - Resolver se nachází v `api/weather/controllers/Weather.js`.
  - Počasí se získá např z https://www.metaweather.com/api/location/796597/ (Praha)
    - Stačí zobrazit první záznam z klíče `consolidated_weather` — Minimální, maximální teplotu a `weather_state_name` (zataženo/slunečno…)
  - Stačí aby fungovala následující GraphQL Query:
    query {
      weather {
        mintemperature
        maxtemperature
      }
    }
- Na frontendu získat počasí ze Strapi serveru a zobrazit ho (třeba na hlavní stránce).
- Ve Strapi vytvořit nový Content Type se jménem `category`. 
  - Kategorie bude mít 2 fieldy:
    - Name — Typ String
    - Posts — Typ Post (relace 1:N)
  - Vytvoření nového content type viz dokumentace Strapi
  - Po vytvoření bude potřeba povolit přístup k resourcům stejně jako v kroku *Spouštění backendu* (find & findOne)
  - Následující GraphQL query by měla vpořádku proběhnout
    query {
      categories {
        id
        title
        posts {
          id
          title
          content
        }
      }
    }
    
- Na frontendu získat a zobrazit jméno kategorie vedle titulku článku
- Na hlavní stránce zobrazit jména všech kategorií, po kliknutí na název kategorie zobrazit články pouze z dané kategorie (filtrování v gql query: https://strapi.io/documentation/3.x.x/guides/graphql.html#configurations)
        
## Užitečné odkazy
- React JS — https://reactjs.org/
- NextJS — SSR pro react https://nextjs.org/
- Strapi — Headless CMS https://strapi.io/
- GraphQL — https://graphql.org/learn/
- React Apollo — https://www.apollographql.com/docs/react/

