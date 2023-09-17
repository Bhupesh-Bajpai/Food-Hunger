# props

>> function arguments in js and attributes in html that we pass inside component we also said it is js object
>> when you dynamically pass the data in component then we pass as props.

# config driven ui

# index in react
>> don't use index as key that is bad practice
   {resData.map((restaurant,index) =>
                    <RestraContainer key=
                    {index} data={restaurant} />
                )}

# why src folder?

# js vs jsx
>> Whatever you want to use it will not create any difference.

# there are 2 types export

>>default export
>>name export

#default import

export default [component name]
import [component name] from "path"

export const component
import {component name} from "path"

# can we use default export and name export togrther

# React Hooks
>> Normal js functions

# 2 important hooks
>> useState(): craete state of variable it manage state of variable

>> its have 2 things because every time when state change we render our ui with that second function.

>> const [ name, setname] = useState();

>> this is array destructuring 

>> we also write like this

>> const arr = useState() 
>> cosnt [ name,setname] = useState()

>> const name = arr[0]
>. const setname = arr[1]


>> useEffect()


# why react so fast

>> because its have efficient dom manipulation its have virtual dom(html concept) and it has diff algo >> find out diff between old and new dom and fast re render ui.

  # reconciliation(React Fiber) 


   # virtual dom: is a representation of actual dom. it is a normal js object.

   # dif Algorithm : find difference between current dom and previous dom. it will update everytime dom when it re render.

   # react fiber : is new way findind diff and update the dom


