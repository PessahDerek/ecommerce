import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/uiComponents/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            height: {
                navBar: "70px"
            },
            colors: {
                'primary': {
                    DEFAULT: '#FEFFEA',
                    50: '#F4FFEA',
                    100: '#F5FFEA',
                    200: '#F7FFEA',
                    300: '#F9FFEA',
                    400: '#FCFFEA',
                    500: '#FEFFEA',
                    600: '#FFFCCB',
                    700: '#FFF1AD',
                    800: '#FFDF8E',
                    900: '#FFC770',
                    950: '#FFB860'
                },
                'secondary': {
                    DEFAULT: '#775B59',
                    50: '#F4F0F0',
                    100: '#E7DFDE',
                    200: '#CCBCBB',
                    300: '#B29A98',
                    400: '#987875',
                    500: '#775B59',
                    600: '#574241',
                    700: '#372A29',
                    800: '#171111',
                    900: '#000000',
                    950: '#000000'
                },
                'text': {
                    DEFAULT: '#0D1F2D',
                    50: '#225874',
                    100: '#1F516C',
                    200: '#1B445C',
                    300: '#16374D',
                    400: '#122B3D',
                    500: '#0D1F2D',
                    600: '#0A1621',
                    700: '#060E15',
                    800: '#030609',
                    900: '#000000',
                    950: '#000000'
                },
                'accent': {
                    DEFAULT: '#F18F01',
                    50: '#FEB622',
                    100: '#FEB31D',
                    200: '#FEAB13',
                    300: '#FEA308',
                    400: '#FB9A01',
                    500: '#F18F01',
                    600: '#D87C01',
                    700: '#BE6A01',
                    800: '#A55901',
                    900: '#8B4901',
                    950: '#7F4101'
                },
            }
        },
    },
    plugins: [],
};
export default config;
