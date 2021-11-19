package io.github.sulion.squirrel

import com.fasterxml.jackson.databind.module.SimpleModule
import io.github.sulion.squirrel.config.ControllerConfig
import io.github.sulion.squirrel.model.Dish
import io.github.sulion.squirrel.model.UIDish
import io.ktor.application.*
import io.ktor.features.*
import io.ktor.http.*
import io.ktor.http.content.*
import io.ktor.jackson.*
import io.ktor.response.*
import io.ktor.routing.*
import org.bson.types.ObjectId

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
                    .map { toUiModel(it) }
            )
        }
    }
}

fun toUiModel(dish: Dish) = UIDish(
    id = dish.id.toInt(),
    venue = dish.venue,
    name = dish.name,
    carbs = dish.carbs,
    fats = dish.fats,
    proteins = dish.proteins,
    energy = dish.energy
)

fun ObjectId.toInt(): Int {
    val ts = this.timestamp
    val counterArray = this.toByteArray().sliceArray(8..11)
    val counter = counterArray.foldIndexed(0) { i, acc, curr -> acc + curr shl (i * 8) }
    return ts + counter * 97
}
