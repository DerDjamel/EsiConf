import api from './api';


export default {
    show(id){
        return api.get(`/paper/${id}`);
    },

    store(info){
        return api.post(`/paper/`, info, { 'content-type': 'application/x-www-form-urlencoded' },);
    },

    update(id, paper){
        return api.put(`/paper/${id}`, paper);
    },

    destroy(id){
        return api.delete(`/paper/${id}`);
    },

    user_papers(){
        return api.get(`/user/paper`);
    },

    download(id){
        return api.get(`/paper/download/${id}`, {responseType: 'arraybuffer'});
    },

    accept_paper(id){
        return api.post(`/paper/${id}/accept`);
    },

    reject_paper(id){
        return api.post(`/paper/${id}/reject`);
    },

    assign_reviewers(id, reviewers){
        return api.post(`/paper/${id}/assign`, reviewers);
    },
}