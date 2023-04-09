import { useParams} from "react-router-dom";
import AllHousingPage from "./AllHousingPage/AllHousingPage";
import HousingIdPage from "./HousingIdPage/HousingIdPage";

const HousingPage = () => {



    const params = useParams()

    return params.id ? <HousingIdPage/> : <AllHousingPage/>
}

export default HousingPage