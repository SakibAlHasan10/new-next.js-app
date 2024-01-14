
## Getting Started NextJS

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
### Change Port

- "dev": "next dev -p 3005"

### Create Route 

- Create folder name as route name then create page.js file inside app folder.

#### Dynamic route & Query 
- folder name [id] inside the parent route folder 
- using props name {params} for achieve dynamic ID key and value 
- query route using {searchParams} for achieve query key and value

#### Create nested route 

- first create parent route then create nested route in parent route folder 

### Server Component vs Client Component

![](./public/images/readme/server%20vs%20client.PNG)

### Server component convert to client component

- Client component using "use client"

### Create client component

- All client component create in components folder


![](/public/images/readme/client-component.png)

### NextJS Build-in Route

- layout - Shared UI for a segment and its children
- page - Unique UI of a route and make routes publicly accessible
- loading - Loading UI for a segment and its children
- not-found - Not found UI for a segment and its children
- error - Error UI for a segment and its children
- global-error - Global Error UI
- route - Server-side API endpoint
- template - Specialized re-rendered Layout UI
- default - Fallback UI for Parallel Routes

### Groping Route

- Groupe layout folder name in (folder name)
- Create route folder and page file in groupe folder route
- Create layout page in groupe folder route


### NextJS Navigation
- Using Link  for Navigation

### Page title 

- Using metadata and title and description

### Image Optimize in NextJS 

- Using Image component, width, height, and alt.
- If this image is external then the following should be used inside the next.config.js file 

images:{
        domains:["mobisoftinfotech.com"]
    }

### Create json fake sever
- install json-server









