interface Conf {
    loginUrl: string
}

interface AppConf {
    development: Conf
    production: Conf
    test: Conf
}

const conf: AppConf = {
    development: {
        loginUrl: 'http://www.strava.com/oauth/authorize?client_id=18363&response_type=code&redirect_uri=http://localhost:3000/login&approval_prompt=force&scope=read_all,profile:read_all,activity:read_all'
    },
    production: {
        loginUrl: 'TO BE DEFINED'
    },
    test: {
        loginUrl: 'TO BE DEFINED'
    }
}

export default conf[process.env.NODE_ENV]