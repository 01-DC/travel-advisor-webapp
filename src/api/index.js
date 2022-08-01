import axios from "axios"

export const getPlacesData = async (sw, ne) => {
	try {
		const {
			data: { data },
		} = await axios.get(URL, {
			params: {
				bl_latitude: sw.lat,
				tr_latitude: ne.lat,
				bl_longitude: sw.lng,
				tr_longitude: ne.lng,
			},
			headers: {
				"x-rapid-key": "",
				"x-rapidapi-host": "",
			},
		})
		return data
	} catch (error) {
		console.log(error)
	}
}
