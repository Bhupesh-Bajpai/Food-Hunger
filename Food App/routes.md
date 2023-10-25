# when useEffect Called?
>> everytime when our component is render it calls. it also have dependency array so it changes beahaviour of that.

>> there are 3 difeerent type cases

# 1. when you use no dependency array so it render every time when component is render again that is basic nature of that.

# 2. when you use a empty dependency array so it renders only ones on initial render.

# 3. when you use any dependency inside array so every time wheen it dependcy changes so it render again.

# useStates

>> everytime when state variables update react triggers reconcilation process(means diff algo run) and render component again with chnages where difference get old jsx and new jsx.

>> main uses of useState create local variable inside component and always called inside start of code is best practice beacuse js is synchronous so js also understand better.

>> don't use state hook inside if else it does not make sense. it will create inconsistency.

>> don't use inside for loop and functions only use inside top of your code. that is best practice.


# react-router-dom


# we have 2 types of routing

# 1. client side routing

# 2. server side routing