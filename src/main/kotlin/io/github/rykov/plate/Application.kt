package io.github.rykov.plate

import io.ktor.application.Application
import io.ktor.application.call
import io.ktor.application.install
import io.ktor.features.CallLogging
import io.ktor.features.ContentNegotiation
import io.ktor.features.DefaultHeaders
import io.ktor.features.StatusPages
import io.ktor.http.ContentType
import io.ktor.http.HttpStatusCode
import io.ktor.jackson.jackson
import io.ktor.response.respond
import io.ktor.response.respondText
import io.ktor.routing.Routing
import io.ktor.routing.get
import io.ktor.routing.post


fun Application.main() {

    install(DefaultHeaders)
    install(CallLogging)
    install(StatusPages) {

        exception<Exception> { cause ->
            call.respond(HttpStatusCode.InternalServerError, "Unexpected server error")
            throw cause // Rethrow to log it
        }
    }
    install(ContentNegotiation) {
        jackson {}
    }
    install(Routing) {
        get("/") {
            call.respondText("Use POST method to convert working hours data to human-readable text", ContentType.Text.Plain)
        }
        post("/") {

        }
    }
}
