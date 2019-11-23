import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

repositories {
    mavenCentral()
}

plugins {
    application
    val kotlinVersion = "1.3.60"
    kotlin("jvm") version kotlinVersion
    id("com.github.node-gradle.node") version "2.2.0"
    id("com.github.johnrengelman.shadow") version "5.1.0"
}

group = "io.github.sulion"
version = "0.0.1-SNAPSHOT"

application {
    mainClassName = "io.ktor.server.netty.EngineMain"
}

node {
    version = "12.13.0"
    npmVersion = "6.12.0"
    download = true
}

dependencies {
    val ktorVersion = "1.2.2"
    val logbackVersion = "1.2.1"
    val jacksonVersion = "2.9.8"
    fun ktor(module: String) = "io.ktor:ktor-$module:$ktorVersion"
    fun ktor() = "io.ktor:ktor:$ktorVersion"
    compile("org.codehaus.groovy:groovy-all:2.3.11")
    implementation(kotlin("stdlib"))
    compile(ktor())
    compile(ktor("server-netty"))
    compile("org.telegram:telegrambots:4.3.1")
    implementation(ktor("jackson"))
    compile("ch.qos.logback:logback-classic:$logbackVersion")
    compile("org.apache.commons:commons-lang3:3.9")
    compile("com.fasterxml.jackson.core:jackson-databind:$jacksonVersion")
    compile("com.fasterxml.jackson.module:jackson-module-kotlin:$jacksonVersion")
    compile("com.fasterxml.jackson.core:jackson-core:$jacksonVersion")
    compile("com.fasterxml.jackson.core:jackson-annotations:$jacksonVersion")
    compile("com.fasterxml.jackson.datatype:jackson-datatype-jsr310:$jacksonVersion")
    compile("org.codehaus.groovy:groovy-all:2.5.8")
    testCompile("org.spockframework:spock-core:1.2-groovy-2.5")
}

tasks.withType<KotlinCompile> {
    kotlinOptions.jvmTarget = "11"
}

tasks.withType<Jar> {
    dependsOn("npm_run_build")
    manifest {
        attributes(
            mapOf(
                "Main-Class" to application.mainClassName
            )
        )
    }
}