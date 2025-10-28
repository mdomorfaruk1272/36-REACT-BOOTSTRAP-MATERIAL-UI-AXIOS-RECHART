# 36-10 introduction to axios advance data loading system

## axios() is used to load data from api url. It's like fetch()
## For using axios we need to import axios from 'axios'
## first param of axios() is the api url.
## axios() return a promise.
## for getting data from promise we need to use .then().

### ==> import axios from 'axios';
### ==> const App = () => {
### ==>     useEffect(()=>{
### ==>         axios(apiUrl)
### ==>         .then(data => console.log(data));
### ==>     }, []);
### ==> }