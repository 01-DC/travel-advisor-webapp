import axios from "axios"

export const getPlacesData = async () => {
	try {
		const {
			data: { data },
		} = await axios.get(URL, options)
		return data
	} catch (error) {
		console.log(error)
	}
}
