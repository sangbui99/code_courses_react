import Container from '../Components/Container';
import Home from '../Components/Home';
import Topic from '../Components/Topic';


const routers = [
    { path:"/", 
      element:<Container></Container>,
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
export default routers ;