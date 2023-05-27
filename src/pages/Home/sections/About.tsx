import { ClientContext } from "@custom-types";
import { DefaultSectionProps } from ".";
import { Container, Section, Box, Heading } from "@components";
import Nullstack from "nullstack";

export default class About extends Nullstack {
  render({ i18n }: ClientContext) {
    return (
      <Section id="who-am-i">
        <Container type="inner" class="tablet:!flex-row">
          <div class="bg-neutral-100 w-full h-fit tablet:w-[200px] tablet:h-[200px] m-auto aspect-square rounded"></div>
          <Box class="gap-4 text-justify !m-0">
            <Heading type="h2" side="right">
              {i18n.whoAmI.title}
            </Heading>
            {i18n.whoAmI.content}
          </Box>
        </Container>
      </Section>
    );
  }
}
