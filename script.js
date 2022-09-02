// Geocode

const [data, setData] = useState([])
const [location, setLocation] = useState("")
const [city, setCity] = useState('')
const [coordinates, setCoordinates] = useState("")
const [range, setRange] = useState(85033)
const [results, setResults] = useState([])

async function fetchCoordinates() {
    setLocation({
      city: {
        name: city,
      },
    });
    const res = await fetch(
      link = document.createElement('a')); link.id = 'Geocode';
      link.href = 'https://geocode.xyz/seattle?json=1'; 
      document.getElementById('Geocode').click();
      const data = await res.json();
      const filtredData = data.results.filter((x) => x.result_type === "city"); setCoordinates(
        !filtredData[0].lat && !filtredData[0].long ? "" : [filtredData[0].lat, filtredData[0].lon]
      );
      return [filtredData[0].lat, filtredData[0].lon];
    }
