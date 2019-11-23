package io.github.sulion.squirrel

import com.fasterxml.jackson.databind.module.SimpleModule
import io.github.sulion.squirrel.config.ControllerConfig
import io.ktor.application.Application
import io.ktor.application.call
import io.ktor.application.install
import io.ktor.features.*
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpMethod
import io.ktor.http.content.default
import io.ktor.http.content.resource
import io.ktor.http.content.resources
import io.ktor.http.content.static
import io.ktor.jackson.jackson
import io.ktor.response.respond
import io.ktor.routing.get
import io.ktor.routing.routing
import io.ktor.util.KtorExperimentalAPI

@KtorExperimentalAPI
fun Application.main() {
    val controllerConfig = ControllerConfig();
    install(DefaultHeaders)
    install(CallLogging)
    install(AutoHeadResponse)
    install(CORS) {
        method(HttpMethod.Options)
        header(HttpHeaders.XForwardedProto)
        host("localhost:3000")
    }
    install(ContentNegotiation) {
        jackson {
            registerModule(SimpleModule())
        }
    }
    routing {
        static("/") {
            resource("/", "frontend/index.html")
            resources("frontend")
            default("index.html")
        }
        get("/data/search") {
            call.respond(
                controllerConfig.searchController.search(call.request.queryParameters["query"] ?: "")
            )
        }
    }
}