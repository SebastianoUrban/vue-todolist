const toDoList = [
    {
        text : 'fare la spesa',
        done : false
    },{
        text : 'pulire la cucina',
        done : false
    },{
        text : 'rinnovare passaporto',
        done : true
    },{
        text : 'crostata per natale',
        done : false
    },{
        text : 'comprare i regali',
        done : true
    },{
        text : 'revisione auto',
        done : true
    },{
        text : 'rinnovare abbonamento palestra',
        done : false
    }
]

const { createApp } = Vue;


createApp({
    data() {
        return {
            toDoList : toDoList,
            newElem : ''
        }
    },
    methods: {
        
    }
}).mount('#app');

