# County RP Admin Panel

## Structure
* `ui-kit` - for reusable GUI components. Structured with Atomic Design model;
* `stores` - for stores; stores can be accessed with `useStore()` hook:
    ```typescript
    import { useStore } from 'stores';
    
    const { userStore } = useStore();
    ```
* `modules` - for components that cannot be places in ui-kit;
* `themes` - for themes;
* `types` - for types and interfaces that are used multiple times in different parts of application (or supposed to be);
* `pages` - for pages;
* `utils` - for functions that are used in different parts of application (or supposed to be);
* `api` - for api accessing functions;
* `routes.ts` - for all routes of app;
*  `locations.ts` - for locations of application;

## Rules:
1. types for simple, interfaces for complex;
    ```typescript
    type TExample = 'yes' | 'no';
    interface IExample {
      name: string;
      surname: string;
      age: number;
    }
    ```
2. components should be structured this way:
    ```
    Component/
    -- index.ts (export point)
    -- types.ts (for types and interfaces, optional)
    -- index.test.ts (for tests, optional)
    -- styled.ts
    -- Component.tsx (main file)
    -- ... some additional files
    ```
3. utils and stores avoid this rule:
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
4. if sub-component is not meant to be used anywhere else, it can be placed inside folder of it`s parent;
    ```
    Component/
    -- SubComponent/
    ```
