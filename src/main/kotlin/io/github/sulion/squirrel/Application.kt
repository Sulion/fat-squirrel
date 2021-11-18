package io.github.sulion.squirrel

import com.fasterxml.jackson.databind.module.SimpleModule
import io.github.sulion.squirrel.config.ControllerConfig
import io.ktor.application.*
import io.ktor.features.*
import io.ktor.http.*
import io.ktor.http.content.*
import io.ktor.jackson.*
import io.ktor.response.*
import io.ktor.routing.*

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