import axios from 'axios';

export default async function fetchData() {
    const response = await axios.get('https://randomuser.me/api/?inc=name,picture');
    const data = response.data.results[0];
    console.log(data);
    const name = data.name.first + ' ' + data.name.last;
    const pfp = data.picture.large;
    console.log(name, pfp);
    return {name: name, pfp: pfp}
}
