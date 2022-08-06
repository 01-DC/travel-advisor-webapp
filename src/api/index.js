import axios from "axios"

// const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary"

export const getPlacesData = async (type, sw, ne) => {
	try {
		const {
			data: { data },
		} = await axios.get(
			`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
			{
				params: {
					bl_latitude: sw.lat,
					tr_latitude: ne.lat,
					bl_longitude: sw.lng,
					tr_longitude: ne.lng,
				},
				headers: {
					"X-RapidAPI-Key":
						"81961389e8msh8d2a3310e269264p18ad4ajsnf0a8f683beec",
					"X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
				},
			}
		)
		return data
	} catch (error) {
		console.log(error)
	}
}
