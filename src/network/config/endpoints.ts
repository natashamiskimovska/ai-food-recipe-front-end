export const Endpoints = {
    //Auth
    register: "/api/register",
    login: "/api/login",
    logout: "/api/logout",
    validateToken: (token: string) => `/auth/validate-token/${token}`,
  
    //Users
    getUsers: "/user",
    postUser: "/user",
    putUser: (id: string) => `/user/${id}`,
  
    //Desks
    getChats: "api/chats",
    postChat: "api/chats",
    getChat: (id: number) => `/chat/${id}`,
  };