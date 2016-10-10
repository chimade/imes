
CREATE DATABASE imes
  WITH OWNER = postgres
       ENCODING = 'UTF8'
       TABLESPACE = pg_default
       LC_COLLATE = 'zh_CN.UTF-8'
       LC_CTYPE = 'zh_CN.UTF-8'
       CONNECTION LIMIT = -1;

COMMENT ON DATABASE imes
  IS 'imes';

  
CREATE SEQUENCE seq_common
  INCREMENT 11
  MINVALUE 1
  MAXVALUE 9223372036854775807
  START 738
  CACHE 1;
ALTER TABLE seq_common
  OWNER TO postgres;

CREATE TABLE base_user
(
  id integer NOT NULL DEFAULT nextval(('seq_common'::text)::regclass),
  user_name character varying(50),
  login_account character varying(30),
  password character varying(30)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE base_user
  OWNER TO postgres;