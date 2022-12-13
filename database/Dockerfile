FROM mysql
EXPOSE 3306
COPY ./api-db.sql /docker-entrypoint-initdb.d/
RUN echo "pid-file = /var/run/mariadb/mysqld.pid" >> /etc/my.cnf
CMD ["mysqld"]