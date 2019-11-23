package io.github.sulion.squirrel.config

import com.mongodb.ConnectionString
import com.mongodb.MongoClientSettings
import com.mongodb.MongoClientSettings.getDefaultCodecRegistry
import com.mongodb.client.MongoClients
import com.typesafe.config.ConfigFactory
import io.github.sulion.squirrel.controller.SearchController
import io.ktor.config.HoconApplicationConfig
import io.ktor.util.KtorExperimentalAPI
import org.bson.codecs.configuration.CodecRegistries.fromProviders
import org.bson.codecs.configuration.CodecRegistries.fromRegistries
import org.bson.codecs.configuration.CodecRegistry
import org.bson.codecs.pojo.Conventions.*
import org.bson.codecs.pojo.PojoCodecProvider

private const val MONGODB_URI_PROPERTY = "ktor.fat-squirrel.mongo-url"

@KtorExperimentalAPI
class ControllerConfig {
    @KtorExperimentalAPI
    val config = HoconApplicationConfig(ConfigFactory.load())
    val searchController = initSearchController(config)

    private fun initSearchController(config: HoconApplicationConfig): SearchController =
        SearchController(
            MongoClientSettings.builder()
                .applyConnectionString(ConnectionString(config.property(MONGODB_URI_PROPERTY).getString()))
                .codecRegistry(codecRegistry())
                .build()
                .let { MongoClients.create(it) }
        )

    private fun codecRegistry(): CodecRegistry {
        return fromRegistries(
            getDefaultCodecRegistry(),
            fromProviders(
                PojoCodecProvider.builder()
                    .conventions(
                        listOf(
                            ANNOTATION_CONVENTION,
                            CLASS_AND_PROPERTY_CONVENTION,
                            SET_PRIVATE_FIELDS_CONVENTION
                        )
                    )
                    .automatic(true)
                    .build()
            )
        )
    }

}