import ky from "ky";

const anime = ky.create({prefixUrl: ' https://api.jikan.moe/v4/'})

export default anime