function exampleMiddleware(storeAPI){
    return function wrapDispatch(next){
        return function handleAction(action){
            console.log("see action called below by exampleMiddleware");
            console.log(action);
            let newAction = {...action,verifiedBy:"exampleMiddleware"};
            return next(newAction);
        };
    };
}
export default exampleMiddleware;