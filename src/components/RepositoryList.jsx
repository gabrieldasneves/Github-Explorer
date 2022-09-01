import {RepositoryItem} from "./RepositoryItem";

const repository = {
    name:"Unform1" ,
    description:"Forms in React with props" ,
    link:"https://github.com/gabrieldasneves?tab=repositories"
}


export function RepositoryList(){
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
            </ul>
        </section>
    );
}