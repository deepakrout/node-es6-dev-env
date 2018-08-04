import 'whatwg-fetch'
import { get } from 'https';
import getBaseUrl from './baseUrl'

const baseUrl = getBaseUrl()

export function getUsers(){
    return getContents('users')
}

export function deleteUser(id){
    return del(`{users/${id}`)
}

function getContents(url){
    return fetch(`${baseUrl}${url}`).then(onSuccess, onError)
}

function del(url){
    const request = new Request(`${baseUrl}${url}`,{
        method: 'DELETE'
    })
    return fetch(request).then(onSuccess,onError);
}

function onSuccess(response){
    return response.json()
}

function onError(error){
    console.log(error)
}