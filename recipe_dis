--
-- PostgreSQL database dump
--

-- Dumped from database version 17.5
-- Dumped by pg_dump version 17.5

-- Started on 2025-06-03 23:06:37 CEST

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 220 (class 1259 OID 16416)
-- Name: favorites; Type: TABLE; Schema: public; Owner: andreaszacchi
--

CREATE TABLE public.favorites (
    username character varying(20) NOT NULL,
    recipe integer NOT NULL
);

--
-- TOC entry 219 (class 1259 OID 16403)
-- Name: recipes; Type: TABLE; Schema: public; Owner: andreaszacchi
--

CREATE TABLE public.recipes (
    id integer NOT NULL,
    created_by character varying(20) NOT NULL,
    name character varying(60) NOT NULL,
    total_time character varying(32) NOT NULL,
    servings character varying(32) NOT NULL,
    instructions text NOT NULL,
    ingredients text NOT NULL,
    image_path text
);

--
-- TOC entry 218 (class 1259 OID 16402)
-- Name: recipes_id_seq; Type: SEQUENCE; Schema: public; Owner: andreaszacchi
--

CREATE SEQUENCE public.recipes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

--
-- TOC entry 3447 (class 0 OID 0)
-- Dependencies: 218
-- Name: recipes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: andreaszacchi
--

ALTER SEQUENCE public.recipes_id_seq OWNED BY public.recipes.id;


--
-- TOC entry 217 (class 1259 OID 16388)
-- Name: users; Type: TABLE; Schema: public; Owner: andreaszacchi
--

CREATE TABLE public.users (
    username character varying(20) NOT NULL,
    password character varying(32)
);

--
-- TOC entry 3283 (class 2604 OID 16406)
-- Name: recipes id; Type: DEFAULT; Schema: public; Owner: andreaszacchi
--

ALTER TABLE ONLY public.recipes ALTER COLUMN id SET DEFAULT nextval('public.recipes_id_seq'::regclass);


--
-- TOC entry 3441 (class 0 OID 16416)
-- Dependencies: 220
-- Data for Name: favorites; Type: TABLE DATA; Schema: public; Owner: andreaszacchi
--

INSERT INTO public.favorites (username, recipe) VALUES ('chris', 2);
INSERT INTO public.favorites (username, recipe) VALUES ('chris', 8);
INSERT INTO public.favorites (username, recipe) VALUES ('test', 1);
INSERT INTO public.favorites (username, recipe) VALUES ('test', 7);


--
-- TOC entry 3440 (class 0 OID 16403)
-- Dependencies: 219
-- Data for Name: recipes; Type: TABLE DATA; Schema: public; Owner: andreaszacchi
--

INSERT INTO public.recipes (id, created_by, name, total_time, servings, instructions, ingredients, image_path) VALUES (1, 'chris', 'Pancakes', '30 minutes', 'about 20 pancakes', 'Sift the flour into the bowl, add the eggs, whisk until homogenus, cook roughly 2 minutes each side, enjoy!', '4 eggs, 200g of flour', 'https://www.valdemarsro.dk/wp-content/2007/09/pandekager-1.jpg');
INSERT INTO public.recipes (id, created_by, name, total_time, servings, instructions, ingredients, image_path) VALUES (2, 'chris', 'Strawberry daiquiri', '10 minutes', '2 cocktails', 'Blend the strawberries, use a sieve to remove the seeds, add the sieved strawberry juice, rum, syrup and ice to the blender, blend again and serve with ice', '500g strawberry, 200g ice, 200ml rum, 2 tbsp sugar syrup', 'https://mummum.dk/wp-content/uploads/2021/08/IMG_4955-min.jpg');
INSERT INTO public.recipes (id, created_by, name, total_time, servings, instructions, ingredients, image_path) VALUES (5, 'chris', 'Limoncello', '15 min', '1 liter', 'Peel off the outer millimeter of the lemon zest using a vegetable peeler, inspect the peels and scrape away any white pith from the inner side of the peels, place the lemon peels in a large jam jar and pour the vodka over them, put on a lid and let it sit on the kitchen counter for one week, strain the infused vodka through a sieve lined with a clean cloth, combine the lemon juice and sugar in a saucepan and heat it slowly while stirring without letting it boil until the sugar crystals dissolve, let the syrup cool, strain the cooled syrup into the jam jar with the strained lemon-infused vodka, stir well to combine, pour the mixture into bottles and let the drink infuse for at least two weeks before serving.', '8 organic lemons,1 dl lemon juice,70 cl vodka,350 grams of sugar', 'https://www.valdemarsro.dk/wp-content/2025/05/hjemmelavet-limoncello.jpg');
INSERT INTO public.recipes (id, created_by, name, total_time, servings, instructions, ingredients, image_path) VALUES (6, 'chris', 'Kebab pizza with iceberg salad', '30 min', '1 pizza', 'Roll out the dough and spread tomato sauce and cheese on it, distribute pepperoni and kebab meat over the pizza as well, bake at the oven’s highest temperature (250–300 °C) for 7–10 minutes, remove the pizza from the oven and arrange salad, tomato and cucumber slices and onion on top, pour dressing over and sprinkle with a little oregano, serve immediately.', '400 g wheat flour, 2.5 dl water, 25 g fresh yeast, 1.5 tbsp olive oil, 1 tbsp sugar, 0.5 tsp salt, 2 dl tomato sauce, 200 g mozzarella cheese, 250 g kebab, shredded iceberg lettuce, tomato slices, cucumber slices, raw onion slices, Crème fraîche dressing or kebab dressing.', 'https://www.dk-kogebogen.dk/billeder-opskrifter/billeder/1375/4_300.jpg');
INSERT INTO public.recipes (id, created_by, name, total_time, servings, instructions, ingredients, image_path) VALUES (7, 'chris', 'Chickpea salad', '15 min', '2 people (4 as a side dish)', 'Drain the chickpeas in a sieve and let the brine drip off, mix olive oil, lime juice, salt, and chili powder in a bowl and toss the chickpeas in, place herbs, avocado, mango, cucumber, and onion in the bowl but wait to toss the salad until just before serving, sprinkle with peanuts and salad cheese', '1 can chickpeas in brine (approx. 240 g), 2 tbsp olive oil, juice of 1 lime, 1 tsp salt, 1 tsp ground chili, 2 dl chopped herbs (e.g., coriander, parsley, or dill), 1 avocado (diced), 1 mango (diced), 1 cucumber (diced), ½ pickled red onion (or raw finely chopped), 50 g peanuts, 50 g salad cheese', 'https://images.arla.com/recordid/1D191379-0BB9-42A1-BB8A2A09030348BA/kikartesalat.jpg?width=1269&height=715&mode=crop&format=webp');
INSERT INTO public.recipes (id, created_by, name, total_time, servings, instructions, ingredients, image_path) VALUES (8, 'chris', 'Smashed potatoes with garlic and parmesan', '40 min', '4 people', 'Place potatoes and salt in a pot and cook until just tender, drain the water and spread the potatoes on a baking sheet lined with parchment paper, give each potato a press so they are crushed but not mashed, melt butter and stir pressed garlic into the butter, brush each potato with a little garlic butter, sprinkle thyme over, add a bit of salt and pepper, then sprinkle with freshly grated Parmesan, place the potatoes in a preheated oven at 180 °C (convection) and bake until crisp and golden on the surface, about 15–20 minutes.', '1 kg potatoes, scrubbed or peeled, 3 cloves garlic, pressed, 15 g butter, 1 tsp dried thyme, 40 g Parmesan, finely grated, salt and freshly ground pepper.', 'https://www.valdemarsro.dk/wp-content/2019/10/knuste-kartofler.jpg');


--
-- TOC entry 3438 (class 0 OID 16388)
-- Dependencies: 217
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: andreaszacchi
--

INSERT INTO public.users (username, password) VALUES ('chris', '123kode');
INSERT INTO public.users (username, password) VALUES ('test_user', '1234');
INSERT INTO public.users (username, password) VALUES ('test', '123');


--
-- TOC entry 3448 (class 0 OID 0)
-- Dependencies: 218
-- Name: recipes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: andreaszacchi
--

SELECT pg_catalog.setval('public.recipes_id_seq', 8, true);


--
-- TOC entry 3289 (class 2606 OID 16420)
-- Name: favorites Favorites_pkey; Type: CONSTRAINT; Schema: public; Owner: andreaszacchi
--

ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT "Favorites_pkey" PRIMARY KEY (username, recipe);


--
-- TOC entry 3287 (class 2606 OID 16410)
-- Name: recipes recipes_pkey; Type: CONSTRAINT; Schema: public; Owner: andreaszacchi
--

ALTER TABLE ONLY public.recipes
    ADD CONSTRAINT recipes_pkey PRIMARY KEY (id);


--
-- TOC entry 3285 (class 2606 OID 16392)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: andreaszacchi
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (username);


--
-- TOC entry 3291 (class 2606 OID 16426)
-- Name: favorites recipe; Type: FK CONSTRAINT; Schema: public; Owner: andreaszacchi
--

ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT recipe FOREIGN KEY (recipe) REFERENCES public.recipes(id);


--
-- TOC entry 3290 (class 2606 OID 16411)
-- Name: recipes recipes_created_by_fkey; Type: FK CONSTRAINT; Schema: public; Owner: andreaszacchi
--

ALTER TABLE ONLY public.recipes
    ADD CONSTRAINT recipes_created_by_fkey FOREIGN KEY (created_by) REFERENCES public.users(username);


--
-- TOC entry 3292 (class 2606 OID 16421)
-- Name: favorites user; Type: FK CONSTRAINT; Schema: public; Owner: andreaszacchi
--

ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT "user" FOREIGN KEY (username) REFERENCES public.users(username);


-- Completed on 2025-06-03 23:06:37 CEST

--
-- PostgreSQL database dump complete
--

