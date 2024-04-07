PGDMP     '                     |            heat_exchange_db    14.9    14.9 ?    F           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            G           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            H           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            I           1262    38342    heat_exchange_db    DATABASE     [   CREATE DATABASE heat_exchange_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'C';
     DROP DATABASE heat_exchange_db;
                postgres    false            �            1259    38396 	   contracts    TABLE       CREATE TABLE public.contracts (
    id integer NOT NULL,
    data_center_id integer,
    partner_id integer,
    start_date date,
    end_date date,
    terms text,
    pricing_agreement character varying(255),
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.contracts;
       public         heap    postgres    false            �            1259    38395    contracts_id_seq    SEQUENCE     �   CREATE SEQUENCE public.contracts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.contracts_id_seq;
       public          postgres    false    218            J           0    0    contracts_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.contracts_id_seq OWNED BY public.contracts.id;
          public          postgres    false    217            �            1259    38353    data_centers    TABLE     �  CREATE TABLE public.data_centers (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    location_id integer,
    heat_capacity integer,
    temperature_supply integer,
    temperature_return integer,
    air_temperature_min integer,
    air_temperature_max integer,
    infrastructure_details text,
    pricing_model character varying(255),
    sustainability_metrics text
);
     DROP TABLE public.data_centers;
       public         heap    postgres    false            �            1259    38352    data_centers_id_seq    SEQUENCE     �   CREATE SEQUENCE public.data_centers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.data_centers_id_seq;
       public          postgres    false    212            K           0    0    data_centers_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.data_centers_id_seq OWNED BY public.data_centers.id;
          public          postgres    false    211            �            1259    38435    infrastructure_details    TABLE       CREATE TABLE public.infrastructure_details (
    id integer NOT NULL,
    data_center_id integer,
    partner_id integer,
    type character varying(255),
    description text,
    capacity character varying(255),
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
 *   DROP TABLE public.infrastructure_details;
       public         heap    postgres    false            �            1259    38434    infrastructure_details_id_seq    SEQUENCE     �   CREATE SEQUENCE public.infrastructure_details_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public.infrastructure_details_id_seq;
       public          postgres    false    222            L           0    0    infrastructure_details_id_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public.infrastructure_details_id_seq OWNED BY public.infrastructure_details.id;
          public          postgres    false    221            �            1259    38344 	   locations    TABLE     �   CREATE TABLE public.locations (
    id integer NOT NULL,
    address text,
    city character varying(255),
    state character varying(255),
    postal_code character varying(255),
    latitude numeric,
    longitude numeric
);
    DROP TABLE public.locations;
       public         heap    postgres    false            �            1259    38343    locations_id_seq    SEQUENCE     �   CREATE SEQUENCE public.locations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.locations_id_seq;
       public          postgres    false    210            M           0    0    locations_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.locations_id_seq OWNED BY public.locations.id;
          public          postgres    false    209            �            1259    38416    matches    TABLE       CREATE TABLE public.matches (
    id integer NOT NULL,
    data_center_id integer,
    partner_id integer,
    match_score integer,
    status character varying(255) DEFAULT 'Pending'::character varying,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.matches;
       public         heap    postgres    false            �            1259    38415    matches_id_seq    SEQUENCE     �   CREATE SEQUENCE public.matches_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.matches_id_seq;
       public          postgres    false    220            N           0    0    matches_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.matches_id_seq OWNED BY public.matches.id;
          public          postgres    false    219            �            1259    38367    partners    TABLE     B  CREATE TABLE public.partners (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    location_id integer,
    heat_demand integer,
    temperature_requirement_min integer,
    temperature_requirement_max integer,
    infrastructure_details text,
    budget integer,
    industry character varying(255)
);
    DROP TABLE public.partners;
       public         heap    postgres    false            �            1259    38366    partners_id_seq    SEQUENCE     �   CREATE SEQUENCE public.partners_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.partners_id_seq;
       public          postgres    false    214            O           0    0    partners_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.partners_id_seq OWNED BY public.partners.id;
          public          postgres    false    213            �            1259    38381    users    TABLE     C  CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(255) NOT NULL,
    password_hash character(60) NOT NULL,
    email character varying(255) NOT NULL,
    role character varying(255) DEFAULT 'user'::character varying,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    38380    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    216            P           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    215            �           2604    38399    contracts id    DEFAULT     l   ALTER TABLE ONLY public.contracts ALTER COLUMN id SET DEFAULT nextval('public.contracts_id_seq'::regclass);
 ;   ALTER TABLE public.contracts ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    218    218            �           2604    38356    data_centers id    DEFAULT     r   ALTER TABLE ONLY public.data_centers ALTER COLUMN id SET DEFAULT nextval('public.data_centers_id_seq'::regclass);
 >   ALTER TABLE public.data_centers ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    212    211    212            �           2604    38438    infrastructure_details id    DEFAULT     �   ALTER TABLE ONLY public.infrastructure_details ALTER COLUMN id SET DEFAULT nextval('public.infrastructure_details_id_seq'::regclass);
 H   ALTER TABLE public.infrastructure_details ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    222    221    222            �           2604    38347    locations id    DEFAULT     l   ALTER TABLE ONLY public.locations ALTER COLUMN id SET DEFAULT nextval('public.locations_id_seq'::regclass);
 ;   ALTER TABLE public.locations ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    209    210    210            �           2604    38419 
   matches id    DEFAULT     h   ALTER TABLE ONLY public.matches ALTER COLUMN id SET DEFAULT nextval('public.matches_id_seq'::regclass);
 9   ALTER TABLE public.matches ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    219    220            �           2604    38370    partners id    DEFAULT     j   ALTER TABLE ONLY public.partners ALTER COLUMN id SET DEFAULT nextval('public.partners_id_seq'::regclass);
 :   ALTER TABLE public.partners ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    213    214            �           2604    38384    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216            ?          0    38396 	   contracts 
   TABLE DATA              COPY public.contracts (id, data_center_id, partner_id, start_date, end_date, terms, pricing_agreement, created_at) FROM stdin;
    public          postgres    false    218   �M       9          0    38353    data_centers 
   TABLE DATA           �   COPY public.data_centers (id, name, location_id, heat_capacity, temperature_supply, temperature_return, air_temperature_min, air_temperature_max, infrastructure_details, pricing_model, sustainability_metrics) FROM stdin;
    public          postgres    false    212   rN       C          0    38435    infrastructure_details 
   TABLE DATA           y   COPY public.infrastructure_details (id, data_center_id, partner_id, type, description, capacity, created_at) FROM stdin;
    public          postgres    false    222   �O       7          0    38344 	   locations 
   TABLE DATA           _   COPY public.locations (id, address, city, state, postal_code, latitude, longitude) FROM stdin;
    public          postgres    false    210   �P       A          0    38416    matches 
   TABLE DATA           b   COPY public.matches (id, data_center_id, partner_id, match_score, status, created_at) FROM stdin;
    public          postgres    false    220   cQ       ;          0    38367    partners 
   TABLE DATA           �   COPY public.partners (id, name, location_id, heat_demand, temperature_requirement_min, temperature_requirement_max, infrastructure_details, budget, industry) FROM stdin;
    public          postgres    false    214   �Q       =          0    38381    users 
   TABLE DATA           U   COPY public.users (id, username, password_hash, email, role, created_at) FROM stdin;
    public          postgres    false    216   �T       Q           0    0    contracts_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.contracts_id_seq', 2, true);
          public          postgres    false    217            R           0    0    data_centers_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.data_centers_id_seq', 3, true);
          public          postgres    false    211            S           0    0    infrastructure_details_id_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public.infrastructure_details_id_seq', 5, true);
          public          postgres    false    221            T           0    0    locations_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.locations_id_seq', 3, true);
          public          postgres    false    209            U           0    0    matches_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.matches_id_seq', 8, true);
          public          postgres    false    219            V           0    0    partners_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.partners_id_seq', 13, true);
          public          postgres    false    213            W           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 2, true);
          public          postgres    false    215            �           2606    38404    contracts contracts_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.contracts
    ADD CONSTRAINT contracts_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.contracts DROP CONSTRAINT contracts_pkey;
       public            postgres    false    218            �           2606    38360    data_centers data_centers_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.data_centers
    ADD CONSTRAINT data_centers_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.data_centers DROP CONSTRAINT data_centers_pkey;
       public            postgres    false    212            �           2606    38443 2   infrastructure_details infrastructure_details_pkey 
   CONSTRAINT     p   ALTER TABLE ONLY public.infrastructure_details
    ADD CONSTRAINT infrastructure_details_pkey PRIMARY KEY (id);
 \   ALTER TABLE ONLY public.infrastructure_details DROP CONSTRAINT infrastructure_details_pkey;
       public            postgres    false    222            �           2606    38351    locations locations_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.locations
    ADD CONSTRAINT locations_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.locations DROP CONSTRAINT locations_pkey;
       public            postgres    false    210            �           2606    38423    matches matches_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.matches
    ADD CONSTRAINT matches_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.matches DROP CONSTRAINT matches_pkey;
       public            postgres    false    220            �           2606    38374    partners partners_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.partners
    ADD CONSTRAINT partners_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.partners DROP CONSTRAINT partners_pkey;
       public            postgres    false    214            �           2606    38394    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            postgres    false    216            �           2606    38390    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    216            �           2606    38392    users users_username_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);
 B   ALTER TABLE ONLY public.users DROP CONSTRAINT users_username_key;
       public            postgres    false    216            �           2606    38405 '   contracts contracts_data_center_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.contracts
    ADD CONSTRAINT contracts_data_center_id_fkey FOREIGN KEY (data_center_id) REFERENCES public.data_centers(id);
 Q   ALTER TABLE ONLY public.contracts DROP CONSTRAINT contracts_data_center_id_fkey;
       public          postgres    false    3476    212    218            �           2606    38410 #   contracts contracts_partner_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.contracts
    ADD CONSTRAINT contracts_partner_id_fkey FOREIGN KEY (partner_id) REFERENCES public.partners(id);
 M   ALTER TABLE ONLY public.contracts DROP CONSTRAINT contracts_partner_id_fkey;
       public          postgres    false    214    3478    218            �           2606    38361 *   data_centers data_centers_location_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.data_centers
    ADD CONSTRAINT data_centers_location_id_fkey FOREIGN KEY (location_id) REFERENCES public.locations(id);
 T   ALTER TABLE ONLY public.data_centers DROP CONSTRAINT data_centers_location_id_fkey;
       public          postgres    false    212    3474    210            �           2606    38444 A   infrastructure_details infrastructure_details_data_center_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.infrastructure_details
    ADD CONSTRAINT infrastructure_details_data_center_id_fkey FOREIGN KEY (data_center_id) REFERENCES public.data_centers(id);
 k   ALTER TABLE ONLY public.infrastructure_details DROP CONSTRAINT infrastructure_details_data_center_id_fkey;
       public          postgres    false    212    222    3476            �           2606    38449 =   infrastructure_details infrastructure_details_partner_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.infrastructure_details
    ADD CONSTRAINT infrastructure_details_partner_id_fkey FOREIGN KEY (partner_id) REFERENCES public.partners(id);
 g   ALTER TABLE ONLY public.infrastructure_details DROP CONSTRAINT infrastructure_details_partner_id_fkey;
       public          postgres    false    222    3478    214            �           2606    38424 #   matches matches_data_center_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.matches
    ADD CONSTRAINT matches_data_center_id_fkey FOREIGN KEY (data_center_id) REFERENCES public.data_centers(id);
 M   ALTER TABLE ONLY public.matches DROP CONSTRAINT matches_data_center_id_fkey;
       public          postgres    false    220    212    3476            �           2606    38429    matches matches_partner_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.matches
    ADD CONSTRAINT matches_partner_id_fkey FOREIGN KEY (partner_id) REFERENCES public.partners(id);
 I   ALTER TABLE ONLY public.matches DROP CONSTRAINT matches_partner_id_fkey;
       public          postgres    false    3478    214    220            �           2606    38375 "   partners partners_location_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.partners
    ADD CONSTRAINT partners_location_id_fkey FOREIGN KEY (location_id) REFERENCES public.locations(id);
 L   ALTER TABLE ONLY public.partners DROP CONSTRAINT partners_location_id_fkey;
       public          postgres    false    214    210    3474            ?   l   x�3�4�4�4202�50�501Mu�t�8�2+RS
�2�S
R�J�2K��2RKRRs2�R�RS8U�L�
��3�F����������������W� ;��      9     x�U��N�@�g�)<�T���@��%��sK���|G��s)0`ْ�����%<�@�P$��E����r���\�hk��̊g�#���q�cY��nd��b�s���i�o��[��(��)*xM�-x$ky�7��_,T�[�?�L��&uQQ�D:Y��}D��1��>�)�E=�f�w���w�N;>_�܄aA�)tY�Ro)\[�=i$����`��9Eql�����\�?[�(ٷ�3��[�g�E#OH�$v%�{A{(ڛ�(�*-q.      C   ,  x����j1��٧�c{�d��V�ꡧR�/�:��k���}�&�
�"B�����_~R�R-��{�C�K+�	pk(�m�$�]��	0K��5u=��6��F��֯ӪU�n&�Q&[���ġBܳಧS�K��vs�@�i������І2S��g &y���v��;��2¬㾧���s��-�ǘ�/q��e9f���_C��9��;�P��k�l��f������7�A�D9�$Q6�GQg�>�p����|�#���c�H��Юn O��q�Ũ(�_�Bʝ      7   �   x�5ͽ
�0F���U���4M�"U�\\:-h�RR�{��v���`Q{��l/�Ҋ!�����C��Vst�3�;���+�v(	�_=��2�UF��s��O�8Ua��bo����O�R��xB _w�]�ܣ�U���9c�-�)      A   P   x�3�4�4�0�H�K��K�4202�5 "3#c+Ss+cS=cc3.3N#�bs"��q���h�!�%1Jc���� ��$P      ;     x���OO1���O�S��v�,�c*�AE/\��Iv���ޤ�O߱כ?D�"�"d�{���حP���-˯�n��`��4eل��Sv%�@���Kmx��
��rbl����^�[|)L�j��ؕ���.$��6k˯��ՠ���8%��D�:5/�RP8Ԋey��F��W@n�*�[�6B�E����d��D�t�YH	�A[�2���1;ʳ(����Jm�<�%�j;2T{����E+]k�^�ʱ�/Ʉ}ۀY���Ѐ���ޤ��:a)�<iz߮w�W����t�3�v���Pr���D�f��F���{� 3x"	Ē�/��Gؿ�@i�LaM�x�pm��������)F��ѣ���}�F�(ޒqb�"�4*�
$�I.�\4�Z�|6���'�'�z�6_!Qs�7?���'7`�$<�^2e?ź���hUi:�f����y���c�����MRA=�)[��S*]�S=z�!F�J���Q��b�%{j��C�����8��;yCa$�9L�k\�*���,��#�M���c���(���[-��4Zc�Gd��ȃv�7ң�pY-�
BE#��	�l�MFo�R|��K6[��������v�,�L�$Yֿ���GTkr�9���o0x:!FS�!)b@���b��4����xw��0�a��l����x����+�n�EE�h�[}/]�$��n{��[~�m�NH��$,��]��z��D�>���S{Ry�d�I^�&I��Co      =      x������ � �     