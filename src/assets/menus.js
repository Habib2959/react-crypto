import GridViewIcon from '@mui/icons-material/GridView';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ArticleIcon from '@mui/icons-material/Article';
import PieChartIcon from '@mui/icons-material/PieChart';
import BarChartIcon from '@mui/icons-material/BarChart';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import TimelineIcon from '@mui/icons-material/Timeline';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
const menuItems = [
    {
        id:0,
        title: "Home",
        icon: <GridViewIcon />,
        path: "/"
    },
    {
        id:1,
        title: "Section 1",
        icon: <BarChartIcon />,
        path: "/section/1"
    },
    {
        id:2,
        title: "Section 2",
        icon: <GraphicEqIcon />,
        path: "/section/2"
    },
    {
        id:3,
        title: "Section 3",
        icon: <TimelineIcon />,
        path: "/section/3"
    },
    {
        id:4,
        title: "Section 4",
        icon: <MonetizationOnIcon />,
        path: "/section/4"
    },
    {
        id:5,
        title: "Section 5",
        icon: <GridViewIcon />,
        path: "/section/5"
    },
    {
        id:6,
        title: "Section 6",
        icon: <PieChartIcon />,
        path: "/section/6"
    },
    {
        id:7,
        title: "Section 7",
        icon: <SignalCellularAltIcon />,
        path: "/section/7"
    },
    {
        id:8,
        title: "Section 8",
        icon: <GridViewIcon />,
        path: "/section/8"
    },
    {
        id:9,
        title: "Documentation",
        icon: <ArticleIcon />,
        path: "/documentation"
    },
]

export default function menu() {
    return menuItems;
}