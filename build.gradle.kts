import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

repositories {
    mavenCentral()
}

plugins {
    application
    val kotlinVersion = "1.5.31"
    kotlin("jvm") version kotlinVersion
    kotlin("plugin.noarg") version kotlinVersion
    id("com.github.node-gradle.node") version "2.2.0"
    id("com.github.johnrengelman.shadow") version "7.1.0"
}

group = "io.github.sulion"
version = "0.0.1-SNAPSHOT"

application {
    this.mainClass.set("io.ktor.server.netty.EngineMain")
}

noArg {
    annotation("io.github.sulion.squirrel.model.DefaultConstructor")
}

node {
    version = "16.13.0"
    npmVersion = "8.1.3"
    download = true
}

dependencies {
    val ktorVersion = "1.6.5"
    val logbackVersion = "1.2.7"
    val jacksonVersion = "2.13.0"
    fun ktor(module: String) = "io.ktor:ktor-$module:$ktorVersion"
    fun ktor() = "io.ktor:ktor:$ktorVersion"
    implementation(kotlin("stdlib"))
    implementation(ktor())
    implementation(ktor("server-netty"))
    implementation(ktor("jackson"))
    implementation("ch.qos.logback:logback-classic:$logbackVersion")
    implementation("org.apache.commons:commons-lang3:3.12.0")
    implementation("com.fasterxml.jackson.core:jackson-databind:$jacksonVersion")
    implementation("com.fasterxml.jackson.module:jackson-module-kotlin:$jacksonVersion")
    implementation("com.fasterxml.jackson.core:jackson-core:$jacksonVersion")
    implementation("com.fasterxml.jackson.core:jackson-annotations:$jacksonVersion")
    implementation("com.fasterxml.jackson.datatype:jackson-datatype-jsr310:$jacksonVersion")
    implementation("org.mongodb:mongodb-driver-sync:4.3.4")
    implementation("org.codehaus.groovy:groovy-all:3.0.9")
    testImplementation("org.spockframework:spock-core:2.0-groovy-3.0")
}

tasks.withType<KotlinCompile> {
    kotlinOptions.jvmTarget = "16"
}


kotlin {
    jvmToolchain {
        (this as JavaToolchainSpec).languageVersion.set(JavaLanguageVersion.of("16"))
    }
}

tasks.withType<Jar> {
    dependsOn("npm_run_build")
    manifest {
        attributes(
            mapOf(
                "Main-Class" to application.mainClass
            )
        )
    }
}