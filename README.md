# 36-6 React Fragment empty element

## <></> -> it's react empty fragment or element
## <React.Fragment></React.Fragment> -> it's also a react fragment that's comes from 'react' module.
## We can also use Fragment component from 'react'.

### ==> import {Fragment} from 'react';
### ==> <Fragment><Fragment>

### ===> const News = () => {
###         return (
###                 <>
###                     <h1>My Header</h1>
###                     <button>Click me</button>
###                 </>
###         )
###      }


### ===> const News = () => {
###         return (
###                 <React.Fragment>
###                     <h1>My Header</h1>
###                     <button>Click me</button>
###                 </React.Fragment>
###         )
###      }

### ===> import {Fragment} from 'react';
### ===> const News = () => {
###         return (
###                 <Fragment>
###                     <h1>My Header</h1>
###                     <button>Click me</button>
###                 </Fragment>
###         )
###      }