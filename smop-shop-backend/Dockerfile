FROM openjdk:17-jdk-alpine as build
WORKDIR /app
COPY pom.xml .
COPY src src
RUN apk add maven
RUN mvn clean package -Dmaven.test.skip=true

FROM openjdk:17-jdk-slim
WORKDIR /dir
COPY --from=build /app/target/*.jar app.jar


EXPOSE 8080
CMD ["java", "-jar", "/dir/app.jar"]
