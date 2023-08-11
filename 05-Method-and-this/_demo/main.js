const me = {
    name: 'iceJ',
    age: 25,
    gender: 'male',
    job: function developer() {console.log('Developer')},
    skills: function() {console.log('Fullstack')},
    hobby: () => console.log('workout'),
    dream_job(j) {console.log(`I want to be a ${j}`)}
}

me.dream_job('backend developer')