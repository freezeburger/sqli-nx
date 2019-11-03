
# React

> React : Est une librarie de composants.

On peut créer un composant sous la forme d'une `function`.

Un composant (peut-étre) une brique de `User Interface` réutilisable:
* Exporté.
* Autonome (encapsulé)
* Configurable (`props`)

# React Outils :

* Angular Console 🦸
* React Devtools
* NPM
* VS Code
* Chrome + Devtools

## React Moteur

> React utilise un virtual DOM dans le but d'interagir le moins possible avec le DOM.

## Component Base Architecture

Une application ou site web peute découpée (composée) en ensemble de composant(s)

## Workspace

* C'est un dossier
* Un environnement de mutualisation (node_modules, libs, apps) etc...

```

npx create-nx-workspace NAME

```

> Ou name devient le namespace

## Application Structure

* Folder components
* Folder services
* Folder containers

## Hiérarchies des composants :

* Dumb vs Smart components or Container vs Components or High vs Low level.
* Dumb| Low | Component : Abstraction HTML (présentation)
* Container| High | Smart : Relation DATA
* Feature Component
* Layout Component

## Syntaxe des composants :

> React utilise le JSX (un subset de JavaScript avec XML) pour demander la création (instanciation) de composant de facon déclarative.

```jsx
import React from 'react';

const PascalName = props => (

    <RootComponent>
        <OtherComponent customValueProps="string">
        <OtherComponent customValueProps={evaluatedExpression}>
        <OtherComponent {...props}>
        <div onClick={functionReference}>This is an html element</div>
        <OtherComponent onClick={functionReference}> {/*  this will fail cant listen DOM Event on Component */}
        <RecevicerComponent>
        {/*  the following will be received as props.children */}
            <a href="#">text</a>
            <a href="#">text</a>
            <a href="#">text</a>
        </RecevicerComponent>
        { evaluatedExpressionAsComponentOrString }
    </RootComponent>

);

export default PascalName;

```

* `MyComponent.defaultProps`
* `MyComponent.propTypes`

### Composants et Ref:

> Une `ref` est un espace de référence (conteneur) pour un element a rendre dans le futur par React

* Element HTML
* Component (uniquement sous forme de `class`)


```jsx
import React from 'react';

const WithRef = props => {

    const willBeReferencedHere = React.createRef();

    return (
        <>
            <input ref={willBeReferencedHere}>
        </>
    );
}

```


### Composants et Best Practices:

* `propTypes` surtout pour les libs
* `defaultProps`

### Composants et Iteration:

> Penser a rensiegner la `key` unique d'optimisation

```jsx
import React from 'react';

const List = props => {

    const namesList = ['Bill'. 'Bob', 'Ben']

    return (
        <ul>
            {namesList.map( (name,num)=> <li key={num}>{name}</li>)}
        </ul>
    );
}

```

### Composants et Hooks:

**Que dans les fonctions**

* `const [name,setName] = React.useState(/* initialValue*/)`

> Ou `name` store la valeur et `setName` en permet la modification et entraine le **rendu** du composant.

* `useEffect`
* `useMemo`
* `useReducer`