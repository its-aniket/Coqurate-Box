import { ProjectInterface } from "@/common.types"
import ProductCard from "@/components/projecctCard"
import { FetchAllProjects } from "@/lib/actions"

type ProjectSearch ={
    projectSearch:{
        edges:{ node:ProjectInterface }[];
        pageInfo:{
            hasPreviousPage:boolean;
            hasNextPage:boolean;
            startCursor:string;
            endCursor:string;
            
        }
    }
}
const Home= async()=>{
    console.log("requiesting.....")
    const data = await FetchAllProjects("Corporate events") as ProjectSearch;
    const projectToDisplay =data?.projectSearch?.edges || [];
    console.log(projectToDisplay)


    if(projectToDisplay.length === 0){
        return(
            <section className="flexStart flex-col paddings">
                category
                <p>There are no products to showcase</p>
            </section>
        )
    }

    return(
        <section className="flex-start flex-col paddings mb-16">
            <h1>Category</h1>
            <section className="projects-grid">
                {projectToDisplay.map(({node}:{ node:ProjectInterface})=>(
                    <ProductCard 
                        key={node?.id}
                        id={node?.id}
                        image={node?.image}
                        image1={node?.image1}
                        title={node?.title}
                    />
                ))}
            </section>
        </section>
    )
}
export default Home