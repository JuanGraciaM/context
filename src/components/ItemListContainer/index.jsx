import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList";
import Title from "../Title";
import './ItemListContainer.css';

const films = [
	{
		id: 1,price: 100,
		image:
			"https://hbomax-images.warnermediacdn.com/images/GYGP7pwQv_ojDXAEAAAFc/tileburnedin?size=1280x720&partner=hbomaxcom&language=es-419&v=a286f1df6bfcc7903f33b83456e214c8&host=art-gallery-latam.api.hbo.com&w=1280",
		category: "films",
		title: "Interestellar",
	},
	{
		id: 2,price: 200,
		image:
			"https://estaticos-cdn.prensaiberica.es/clip/1123acc3-3395-4237-9ca0-95ee19999279_16-9-aspect-ratio_default_0.jpg",
		category: "films",
		title: "Star trek",
	},
	{
		id: 3,price: 50,
		image:
			"https://4.bp.blogspot.com/-rvOo_gV60wo/XG0SXrdG0UI/AAAAAAAAdNk/5pre1wXF8UAw65g3S1zDzXgjXMxCAU0zQCEwYBhgL/s400/ro5.jpg",
		category: "films",
		title: "Ronin",
	},
	{
		id: 4,price: 200,
		image:
			"https://as01.epimg.net/meristation/imagenes/2021/10/13/noticias/1634118017_674906_1634118171_noticia_normal.jpg",
		category: "series",
		title: "The Walking dead",
	},
	{
		id: 5,price:100,
		image:
			"https://imagenes.20minutos.es/files/og_thumbnail/uploads/imagenes/2019/10/22/breakingBad.jpg",
		category: "series",
		title: "Breaking bad",
	},
];

export const ItemListContainer = ({ texto }) => {
	const [data, setData] = useState([]);
	const { categoriaId } = useParams();

	useEffect(() => {
		const getData = new Promise((resolve) => {
			setTimeout(() => {
				resolve(films);
			}, 1000);
		});
		if (categoriaId) {
			getData.then((res) =>
				setData(res.filter((film) => film.category === categoriaId)),
			);
		} else {
			getData.then((res) => setData(res));
		}
	}, [categoriaId]);

	return (
		<>
			<Title greeting={texto} />
			<ItemList data={data} />
		</>
	);
};

export default ItemListContainer;
