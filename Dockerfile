FROM gradle:5.4-jdk11-slim AS build
COPY --chown=gradle:gradle . /home/gradle/src
WORKDIR /home/gradle/src
RUN gradle build --no-daemon

FROM openjdk:11-jre-slim
RUN mkdir -p /opt/app
COPY --from=build /home/gradle/src/build/libs/fat-squirrel-0.0.1-SNAPSHOT-all.jar /opt/app/fat-squirrel-0.0.1-SNAPSHOT-all.jar

RUN useradd --create-home --user-group tavernik && \
    chown -R tavernik /opt

USER tavernik
WORKDIR /opt/app

EXPOSE 8080

ENV PORT=80
ENV MONGODB_URI="mongodb://localhost:27017/squirrel"
CMD ["java", "-jar", "fat-squirrel-0.0.1-SNAPSHOT-all.jar"]