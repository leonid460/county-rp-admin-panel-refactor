# County RP Admin Panel



## Usage



* **To run development server:**

  ```bash
  npm start
  ```

* **To make production build:**

  ```bash
  npm run build
  ```

* **To run tests:**

  ```bash
  npm run test
  ```

  in watch mode:

  ```bash
  npm run test:watch
  ```

  

## Structure

* `ui-kit` - for reusable GUI components. Structured with Atomic Design model;

* `store` - for redux store;
  
* `modules` - for components that cannot be places in ui-kit;

* `themes` - for themes;

* `types` - for types and interfaces that are used multiple times in different parts of application (or supposed to be);

* `pages` - for pages;

* `utils` - for functions that are used in different parts of application (or supposed to be);

* `api` - for api accessing functions;

* `routes.ts` - for all routes of app;

*  `locations.ts` - for locations of application;



## Rules:



### Types

1. types for simple, interfaces for complex;
    ```typescript
    type TExample = 'yes' | 'no';
    interface IExample {
      name: string;
      surname: string;
      age: number;
    }
    ```



### Folder Structure

1. components should be structured this way:
    ```
    Component/
    -- index.ts (export point)
    -- types.ts (for types and interfaces, optional)
    -- index.test.ts (for tests, optional)
    -- styled.ts
    -- Component.tsx (main file)
    -- ... some additional files
    ```

2. utils avoid this rule:
   ```
   utils/
   -- someUtil.ts
   ```
   if there are tests for util, then structure should be like this:
   ```
   utils/
   -- someUtil/
   ---- index.ts (main file)
   ---- index.test.ts (for tests)
   ```

3. if sub-component is not meant to be used anywhere else, it can be placed inside folder of it`s parent;
    ```
    Component/
    -- SubComponent/
    ```

4. Pages' modules should be united in folder with page's name:

   ```
   Profile/
   	AvatarArea
   	UserInfoArea
   	index.ts
   ```

5. Store slices should be organised like this:

   ```
   exampleSlice/
    actions.ts
   	exampleSlice.ts
   	index.ts
   	initialState.ts
   	selectors.ts
   	thunks.ts
   	types.ts
   ```

### Code Organisation

1. Async requests of pages: request is made in page component and then results of request are passed to modules.