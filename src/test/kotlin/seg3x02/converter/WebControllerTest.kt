package seg3x02.converter

import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.test.web.servlet.result.MockMvcResultMatchers

@WebMvcTest
class WebControllerTest {
    @Autowired
    lateinit var mockMvc: MockMvc

    @Test
    fun request_to_home() {
        mockMvc.perform(MockMvcRequestBuilders.get("/"))
            .andExpect(MockMvcResultMatchers.status().isOk)
            .andExpect(MockMvcResultMatchers.view().name("home"))
    }

    @Test
    fun celsius_to_fahrenheit_conversion() {
        mockMvc.perform(
            MockMvcRequestBuilders.get("/convert")
                .param("celsius", "0")
                .param("fahrenheit", "")
                .param("operation", "CtoF"))
            .andExpect(MockMvcResultMatchers.status().isOk)
            .andExpect(MockMvcResultMatchers.model().attribute("fahrenheit", "32.00"))
            .andExpect(MockMvcResultMatchers.view().name("home"))
    }

    @Test
    fun celsius_to_fahrenheit_boiling_point() {
        mockMvc.perform(
            MockMvcRequestBuilders.get("/convert")
                .param("celsius", "100")
                .param("fahrenheit", "")
                .param("operation", "CtoF"))
            .andExpect(MockMvcResultMatchers.status().isOk)
            .andExpect(MockMvcResultMatchers.model().attribute("fahrenheit", "212.00"))
            .andExpect(MockMvcResultMatchers.view().name("home"))
    }

    @Test
    fun fahrenheit_to_celsius_conversion() {
        mockMvc.perform(
            MockMvcRequestBuilders.get("/convert")
                .param("celsius", "")
                .param("fahrenheit", "32")
                .param("operation", "FtoC"))
            .andExpect(MockMvcResultMatchers.status().isOk)
            .andExpect(MockMvcResultMatchers.model().attribute("celsius", "0.00"))
            .andExpect(MockMvcResultMatchers.view().name("home"))
    }

    @Test
    fun fahrenheit_to_celsius_boiling_point() {
        mockMvc.perform(
            MockMvcRequestBuilders.get("/convert")
                .param("celsius", "")
                .param("fahrenheit", "212")
                .param("operation", "FtoC"))
            .andExpect(MockMvcResultMatchers.status().isOk)
            .andExpect(MockMvcResultMatchers.model().attribute("celsius", "100.00"))
            .andExpect(MockMvcResultMatchers.view().name("home"))
    }

    @Test
    fun celsius_format_error() {
        mockMvc.perform(
            MockMvcRequestBuilders.get("/convert")
                .param("celsius", "abc")
                .param("fahrenheit", "")
                .param("operation", "CtoF"))
            .andExpect(MockMvcResultMatchers.status().isOk)
            .andExpect(MockMvcResultMatchers.model().attribute("error", "CelsiusFormatError"))
            .andExpect(MockMvcResultMatchers.view().name("home"))
    }

    @Test
    fun fahrenheit_format_error() {
        mockMvc.perform(
            MockMvcRequestBuilders.get("/convert")
                .param("celsius", "")
                .param("fahrenheit", "xyz")
                .param("operation", "FtoC"))
            .andExpect(MockMvcResultMatchers.status().isOk)
            .andExpect(MockMvcResultMatchers.model().attribute("error", "FahrenheitFormatError"))
            .andExpect(MockMvcResultMatchers.view().name("home"))
    }

    @Test
    fun invalid_operation_error() {
        mockMvc.perform(
            MockMvcRequestBuilders.get("/convert")
                .param("celsius", "20")
                .param("fahrenheit", "68")
                .param("operation", "invalidOp"))
            .andExpect(MockMvcResultMatchers.status().isOk)
            .andExpect(MockMvcResultMatchers.model().attribute("error", "OperationFormatError"))
            .andExpect(MockMvcResultMatchers.view().name("home"))
    }
}
