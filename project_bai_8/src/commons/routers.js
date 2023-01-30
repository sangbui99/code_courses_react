import ContainerF from '../Components/ContainerF';
import Home from '../Components/Home';
import Topic from '../Components/Topic';


const routers = [
    { path:"/product", 
      element:<ContainerF/>,
      name:"Product"
    },

    { path:"/home",
      element:<Home></Home>,
      name:"Home"
    },

    { path:"/topic",
      element:<Topic></Topic>,
      name:"Topic"
    }
  ]


export default routers