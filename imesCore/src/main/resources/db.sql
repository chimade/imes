--
-- PostgreSQL database dump
--

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

--
-- Name: imes; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON DATABASE imes IS 'imes';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: base_action; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE base_action (
    id integer NOT NULL,
    itemid character varying(50),
    name character varying(50)
);


ALTER TABLE base_action OWNER TO postgres;

--
-- Name: COLUMN base_action.itemid; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN base_action.itemid IS '项目标示';


--
-- Name: COLUMN base_action.name; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN base_action.name IS '名字';


--
-- Name: base_authorize_model_action; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE base_authorize_model_action (
    user_id integer,
    type integer,
    action_id integer,
    factory_id integer,
    id integer NOT NULL,
    role_id integer,
    model_id integer
);


ALTER TABLE base_authorize_model_action OWNER TO postgres;

--
-- Name: COLUMN base_authorize_model_action.user_id; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN base_authorize_model_action.user_id IS '用户名';


--
-- Name: COLUMN base_authorize_model_action.type; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN base_authorize_model_action.type IS '类型';


--
-- Name: COLUMN base_authorize_model_action.action_id; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN base_authorize_model_action.action_id IS '动作';


--
-- Name: COLUMN base_authorize_model_action.factory_id; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN base_authorize_model_action.factory_id IS '工厂';


--
-- Name: COLUMN base_authorize_model_action.role_id; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN base_authorize_model_action.role_id IS '角色';


--
-- Name: COLUMN base_authorize_model_action.model_id; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN base_authorize_model_action.model_id IS '模块';


--
-- Name: base_authorize_model_action_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE base_authorize_model_action_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE base_authorize_model_action_id_seq OWNER TO postgres;

--
-- Name: base_authorize_model_action_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE base_authorize_model_action_id_seq OWNED BY base_authorize_model_action.id;


--
-- Name: base_factory_user; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE base_factory_user (
    id integer NOT NULL,
    factory_id integer,
    user_id integer
);


ALTER TABLE base_factory_user OWNER TO postgres;

--
-- Name: base_factory_user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE base_factory_user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE base_factory_user_id_seq OWNER TO postgres;

--
-- Name: base_factory_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE base_factory_user_id_seq OWNED BY base_factory_user.id;


--
-- Name: base_log; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE base_log (
    id integer NOT NULL,
    user_id integer,
    createtime timestamp without time zone,
    operate character varying(300)
);


ALTER TABLE base_log OWNER TO postgres;

--
-- Name: COLUMN base_log.user_id; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN base_log.user_id IS '用户';


--
-- Name: COLUMN base_log.createtime; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN base_log.createtime IS '日期';


--
-- Name: COLUMN base_log.operate; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN base_log.operate IS '内容';


--
-- Name: base_log_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE base_log_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE base_log_id_seq OWNER TO postgres;

--
-- Name: base_log_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE base_log_id_seq OWNED BY base_log.id;


--
-- Name: base_model; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE base_model (
    id integer NOT NULL,
    name character varying(50),
    url character varying(50),
    status integer DEFAULT 1
);


ALTER TABLE base_model OWNER TO postgres;

--
-- Name: COLUMN base_model.name; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN base_model.name IS '名字';


--
-- Name: COLUMN base_model.url; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN base_model.url IS '路径';


--
-- Name: COLUMN base_model.status; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN base_model.status IS '状态';


--
-- Name: base_model_action; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE base_model_action (
    id integer NOT NULL,
    model_id integer,
    action_id integer
);


ALTER TABLE base_model_action OWNER TO postgres;

--
-- Name: COLUMN base_model_action.model_id; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN base_model_action.model_id IS '模块名';


--
-- Name: COLUMN base_model_action.action_id; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN base_model_action.action_id IS '动作名';


--
-- Name: base_model_action_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE base_model_action_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE base_model_action_id_seq OWNER TO postgres;

--
-- Name: base_model_action_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE base_model_action_id_seq OWNED BY base_model_action.id;


--
-- Name: base_model_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE base_model_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE base_model_id_seq OWNER TO postgres;

--
-- Name: base_model_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE base_model_id_seq OWNED BY base_model.id;


--
-- Name: base_operate_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE base_operate_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE base_operate_id_seq OWNER TO postgres;

--
-- Name: base_operate_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE base_operate_id_seq OWNED BY base_action.id;


--
-- Name: base_role; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE base_role (
    id integer NOT NULL,
    factory_id integer,
    name character varying(50)
);


ALTER TABLE base_role OWNER TO postgres;

--
-- Name: COLUMN base_role.factory_id; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN base_role.factory_id IS '工厂';


--
-- Name: COLUMN base_role.name; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN base_role.name IS '名字';


--
-- Name: base_role_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE base_role_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE base_role_id_seq OWNER TO postgres;

--
-- Name: base_role_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE base_role_id_seq OWNED BY base_role.id;


--
-- Name: base_user; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE base_user (
    id integer DEFAULT nextval(('seq_common'::text)::regclass) NOT NULL,
    user_name character varying(50),
    login_account character varying(30),
    password character varying(100),
    status integer
);


ALTER TABLE base_user OWNER TO postgres;

--
-- Name: company; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE company (
    id integer NOT NULL,
    code text DEFAULT ''::text,
    name text DEFAULT ''::text,
    address text DEFAULT ''::text,
    website text DEFAULT ''::text,
    telephone text DEFAULT ''::text,
    description text DEFAULT ''::text
);


ALTER TABLE company OWNER TO postgres;

--
-- Name: company_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE company_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE company_id_seq OWNER TO postgres;

--
-- Name: company_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE company_id_seq OWNED BY company.id;


--
-- Name: factory; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE factory (
    id integer NOT NULL,
    code text DEFAULT ''::text,
    name text DEFAULT ''::text,
    company_id integer NOT NULL
);


ALTER TABLE factory OWNER TO postgres;

--
-- Name: factory_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE factory_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE factory_id_seq OWNER TO postgres;

--
-- Name: factory_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE factory_id_seq OWNED BY factory.id;


--
-- Name: label; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE label (
    id integer NOT NULL,
    label_template_id integer,
    printed_copy integer DEFAULT 0,
    status integer,
    created_date timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE label OWNER TO postgres;

--
-- Name: label_detail; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE label_detail (
    id integer NOT NULL,
    label_id integer,
    label_data1 text DEFAULT ''::text,
    lable_data2 text DEFAULT ''::text,
    label_data3 text DEFAULT ''::text,
    lable_data4 text DEFAULT ''::text,
    label_data5 text DEFAULT ''::text,
    lable_data6 text DEFAULT ''::text
);


ALTER TABLE label_detail OWNER TO postgres;

--
-- Name: label_detail_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE label_detail_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE label_detail_id_seq OWNER TO postgres;

--
-- Name: label_detail_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE label_detail_id_seq OWNED BY label_detail.id;


--
-- Name: label_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE label_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE label_id_seq OWNER TO postgres;

--
-- Name: label_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE label_id_seq OWNED BY label.id;


--
-- Name: label_template; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE label_template (
    id integer NOT NULL,
    code text DEFAULT ''::text,
    name text DEFAULT ''::text,
    template_file text DEFAULT ''::text,
    description text DEFAULT ''::text,
    label_field1 text DEFAULT ''::text,
    label_field2 text DEFAULT ''::text,
    label_field3 text DEFAULT ''::text,
    label_field4 text DEFAULT ''::text,
    label_field5 text DEFAULT ''::text,
    label_field6 text DEFAULT ''::text
);


ALTER TABLE label_template OWNER TO postgres;

--
-- Name: label_template_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE label_template_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE label_template_id_seq OWNER TO postgres;

--
-- Name: label_template_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE label_template_id_seq OWNED BY label_template.id;


--
-- Name: line; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE line (
    shopfloor_id integer NOT NULL,
    id integer NOT NULL,
    code text DEFAULT ''::text,
    name text DEFAULT ''::text,
    revision integer NOT NULL,
    short_name text DEFAULT ''::text,
    long_name text DEFAULT ''::text,
    status integer DEFAULT 0 NOT NULL,
    workorder_id integer,
    description text DEFAULT ''::text,
    created_date timestamp without time zone DEFAULT now()
);


ALTER TABLE line OWNER TO postgres;

--
-- Name: line_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE line_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE line_id_seq OWNER TO postgres;

--
-- Name: line_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE line_id_seq OWNED BY line.id;


--
-- Name: line_revision_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE line_revision_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE line_revision_seq OWNER TO postgres;

--
-- Name: line_revision_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE line_revision_seq OWNED BY line.revision;


--
-- Name: location; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE location (
    id integer NOT NULL,
    code text DEFAULT ''::text,
    name text DEFAULT ''::text,
    process_id integer,
    shopfloor_id integer NOT NULL
);


ALTER TABLE location OWNER TO postgres;

--
-- Name: location_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE location_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE location_id_seq OWNER TO postgres;

--
-- Name: location_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE location_id_seq OWNED BY location.id;


--
-- Name: part; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE part (
    id integer NOT NULL,
    code text DEFAULT ''::text,
    description text DEFAULT ''::text,
    revision integer DEFAULT 0,
    length double precision DEFAULT 0,
    width double precision DEFAULT 0,
    height double precision DEFAULT 0,
    weight double precision DEFAULT 0,
    graphic text DEFAULT ''::text,
    label_data text DEFAULT ''::text,
    model_code text DEFAULT ''::text,
    model_description text DEFAULT ''::text,
    customer_code text DEFAULT ''::text,
    part_family_id integer DEFAULT 0
);


ALTER TABLE part OWNER TO postgres;

--
-- Name: part_family; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE part_family (
    id integer NOT NULL,
    code text DEFAULT ''::text,
    name text DEFAULT ''::text,
    description text DEFAULT ''::text
);


ALTER TABLE part_family OWNER TO postgres;

--
-- Name: part_family_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE part_family_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE part_family_id_seq OWNER TO postgres;

--
-- Name: part_family_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE part_family_id_seq OWNED BY part_family.id;


--
-- Name: part_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE part_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE part_id_seq OWNER TO postgres;

--
-- Name: part_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE part_id_seq OWNED BY part.id;


--
-- Name: printer; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE printer (
    id integer NOT NULL,
    code text DEFAULT ''::text,
    name text DEFAULT ''::text,
    host text DEFAULT ''::text,
    port text DEFAULT ''::text,
    resolution text DEFAULT ''::text,
    description text DEFAULT ''::text
);


ALTER TABLE printer OWNER TO postgres;

--
-- Name: printer_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE printer_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE printer_id_seq OWNER TO postgres;

--
-- Name: printer_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE printer_id_seq OWNED BY printer.id;


--
-- Name: process; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE process (
    id integer NOT NULL,
    code text DEFAULT ''::text,
    name text DEFAULT ''::text,
    shopfloor_id integer NOT NULL
);


ALTER TABLE process OWNER TO postgres;

--
-- Name: process_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE process_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE process_id_seq OWNER TO postgres;

--
-- Name: process_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE process_id_seq OWNED BY process.id;


--
-- Name: seq_common; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE seq_common
    START WITH 1
    INCREMENT BY 11
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE seq_common OWNER TO postgres;

--
-- Name: shopfloor; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE shopfloor (
    id integer NOT NULL,
    code text,
    name text,
    factory_id integer NOT NULL
);


ALTER TABLE shopfloor OWNER TO postgres;

--
-- Name: shopfloor_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE shopfloor_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE shopfloor_id_seq OWNER TO postgres;

--
-- Name: shopfloor_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE shopfloor_id_seq OWNED BY shopfloor.id;


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY base_action ALTER COLUMN id SET DEFAULT nextval('base_operate_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY base_authorize_model_action ALTER COLUMN id SET DEFAULT nextval('base_authorize_model_action_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY base_factory_user ALTER COLUMN id SET DEFAULT nextval('base_factory_user_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY base_log ALTER COLUMN id SET DEFAULT nextval('base_log_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY base_model ALTER COLUMN id SET DEFAULT nextval('base_model_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY base_model_action ALTER COLUMN id SET DEFAULT nextval('base_model_action_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY base_role ALTER COLUMN id SET DEFAULT nextval('base_role_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY company ALTER COLUMN id SET DEFAULT nextval('company_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY factory ALTER COLUMN id SET DEFAULT nextval('factory_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY label ALTER COLUMN id SET DEFAULT nextval('label_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY label_detail ALTER COLUMN id SET DEFAULT nextval('label_detail_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY label_template ALTER COLUMN id SET DEFAULT nextval('label_template_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY line ALTER COLUMN id SET DEFAULT nextval('line_id_seq'::regclass);


--
-- Name: revision; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY line ALTER COLUMN revision SET DEFAULT nextval('line_revision_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY location ALTER COLUMN id SET DEFAULT nextval('location_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY part ALTER COLUMN id SET DEFAULT nextval('part_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY part_family ALTER COLUMN id SET DEFAULT nextval('part_family_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY printer ALTER COLUMN id SET DEFAULT nextval('printer_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY process ALTER COLUMN id SET DEFAULT nextval('process_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY shopfloor ALTER COLUMN id SET DEFAULT nextval('shopfloor_id_seq'::regclass);


--
-- Name: company_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY company
    ADD CONSTRAINT company_pkey PRIMARY KEY (id);


--
-- Name: factory_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY factory
    ADD CONSTRAINT factory_pkey PRIMARY KEY (id);


--
-- Name: model_action; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY base_model_action
    ADD CONSTRAINT model_action UNIQUE (model_id, action_id);


--
-- Name: shopfloor_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY shopfloor
    ADD CONSTRAINT shopfloor_pkey PRIMARY KEY (id);


--
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--
