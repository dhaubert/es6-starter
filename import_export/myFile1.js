const myFirstModule = (function(){
    
    return {
        test: 1,
        update: () => { console.log('Updating first module.') }
    };
    
})();

export default myFirstModule;