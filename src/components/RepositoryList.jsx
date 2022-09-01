import {RepositoryItem} from "./RepositoryItem";

export function RepositoryList(){
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                <RepositoryItem 
                    repository="Unform1" 
                    description="Forms in React with props" 
                    link="https://github.com/gabrieldasneves?tab=repositories"/>
            </ul>
        </section>
    );
}