

const inputHelper = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, data: any)=>{
    const tempdata = {...data};
    tempdata[e.target.name] = e.target.value;
    return tempdata;
}
export default inputHelper; 